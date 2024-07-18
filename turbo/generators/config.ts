import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper("capitialize", (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  })

  plop.setGenerator("UI", {
    description: "Create a new UI component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the name of the new component?",
        validate: (input: string) => {
          if (!input) {
            return "component name is required";
          }

          if (input.split(' ').length > 1) {
            return "component name should be a single word";
          }

          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/components/ui/{{ componentName }}/index.tsx",
        templateFile: "templates/uiComponent.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/components/ui/{{ componentName }}/types.ts",
        templateFile: "templates/uiComponentTypes.hbs",
      }
    ],
  })

  plop.setGenerator('Sanity', {
    description: 'Create a new content section',
    prompts: [
      {
        type: 'input',
        name: 'sectionName',
        message: 'What is the name of the new section?',
        validate: (input: string) => {
          if (!input) {
            return 'section name is required'
          }

          if (input.split(' ').length > 1) {
            return 'section name should be a single word'
          }

          return true
        }
      }
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/components/sections/{{ sectionName }}/index.tsx",
        templateFile: "templates/uiSection.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/components/sections/{{ sectionName }}/types.ts",
        templateFile: "templates/uiSectionProps.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/apps/sanity/src/contentSections/{{ capitialize sectionName }}/index.tsx",
        templateFile: "templates/sanitySection.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/apps/sanity/src/contentSections/{{ capitialize sectionName }}/types.ts",
        templateFile: "templates/sanitySectionTypes.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/apps/sanity/src/lib/schemas/contentSections/{{ sectionName }}.ts",
        templateFile: "templates/sanitySectionSchema.hbs",
      },
      {
        type: 'modify',
        path: '{{ turbo.paths.root }}/apps/sanity/src/contentSections/index.tsx',
        pattern: /(\/\/ end of section imports)/g,
        template: "import {{ capitialize sectionName }} from './{{ capitialize sectionName }}'\n$1"
      },
      {
        type: 'modify',
        path: '{{ turbo.paths.root }}/apps/sanity/src/contentSections/index.tsx',
        pattern: /(\/\/ end of section object)/g,
        template: "'section.{{ sectionName }}': {{ capitialize sectionName }},\n$1"
      },
      {
        type: 'modify',
        path: '{{ turbo.paths.root }}/packages/ui/index.tsx',
        pattern: /(\/\/ end component exports)/g,
        template: `export * from "./components/sections/{{ sectionName }}"\n$1`
      },
      {
        type: 'modify',
        path: '{{ turbo.paths.root }}/apps/sanity/src/lib/schemas/contentSections/index.ts',
        pattern: /(\/\/ end of section array)/g,
        template: `{{ sectionName }},"\n$1`
      },
      {
        type: 'modify',
        path: '{{ turbo.paths.root }}/apps/sanity/src/lib/schemas/contentSections/index.ts',
        pattern: /(\/\/ end of section imports)/g,
        template: `import {{ sectionName }} from './{{ sectionName }}'\n$1`
      },
    ]
  })
}