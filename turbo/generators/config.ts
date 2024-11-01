import type { PlopTypes } from "@turbo/gen";

const componentNamePrompt = {
  type: "input",
  name: "sectionName",
  message: "What is the name of the new section?",
  validate: (input: string) => {
    if (!input) {
      return "section name is required";
    }

    if (input.split(" ").length > 1) {
      return "section name should be a single word";
    }

    return true;
  },
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper("capitialize", (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  plop.setHelper("loweraseFirstLetter", (str: string) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
  });

  plop.setGenerator("UI", {
    description: "Create a new UI component",
    prompts: [componentNamePrompt],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/components/ui/{{ capitialize sectionName }}/index.tsx",
        templateFile: "templates/uiComponent.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/components/ui/{{ capitialize sectionName }}/types.ts",
        templateFile: "templates/uiComponentTypes.hbs",
      },
      {
        type: "modify",
        path: "{{ turbo.paths.root }}/packages/ui/index.tsx",
        pattern: /(\/\/ end component exports)/g,
        template: `export * from "./components/ui/{{ sectionName }}"\n$1`,
      },
    ],
  });

  plop.setGenerator("Storyblok", {
    description: "Create a new content section",
    prompts: [componentNamePrompt],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/apps/storyblok/src/contentSections/{{ capitialize sectionName }}/index.tsx",
        templateFile: "templates/storyblokSection.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/apps/storyblok/src/contentSections/{{ capitialize sectionName }}/types.ts",
        templateFile: "templates/storyblokSectionTypes.hbs",
      },
      {
        type: "modify",
        path: "{{ turbo.paths.root }}/apps/storyblok/src/constants/sbComponents.tsx",
        pattern: /(\/\/ end of sb components imports)/g,
        template: `import {{ capitialize sectionName }} from '@/contentSections/{{ capitialize sectionName }}'\n$1`,
      },
      {
        type: "modify",
        path: "{{ turbo.paths.root }}/apps/storyblok/src/constants/sbComponents.tsx",
        pattern: /(\/\/ end of sb components mapping)/g,
        template: `{{ loweraseFirstLetter sectionName }}: {{ capitialize sectionName }},\n$1`,
      },
    ],
  });

  plop.setGenerator("Sanity", {
    description: "Create a new content section",
    prompts: [componentNamePrompt],
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
        path: "{{ turbo.paths.root }}/apps/sanity/src/contentSections/{{ capitialize sectionName }}/schema.ts",
        templateFile: "templates/sanitySectionSchema.hbs",
      },
      {
        type: "modify",
        path: "{{ turbo.paths.root }}/apps/sanity/src/contentSections/index.tsx",
        pattern: /(\/\/ end of section imports)/g,
        template:
          "import {{ capitialize sectionName }} from './{{ capitialize sectionName }}'\n$1",
      },
      {
        type: "modify",
        path: "{{ turbo.paths.root }}/apps/sanity/src/contentSections/index.tsx",
        pattern: /(\/\/ end of section object)/g,
        template:
          "'section.{{ loweraseFirstLetter sectionName }}': {{ capitialize sectionName }},\n$1",
      },
      {
        type: "modify",
        path: "{{ turbo.paths.root }}/packages/ui/index.tsx",
        pattern: /(\/\/ end component exports)/g,
        template: `export * from "./components/sections/{{ sectionName }}"\n$1`,
      },
      {
        type: "modify",
        path: "{{ turbo.paths.root }}/apps/sanity/src/lib/schemas/sections.ts",
        pattern: /(\/\/ end of section imports)/g,
        template: `import {{ loweraseFirstLetter sectionName }} from '@/contentSections/{{ capitialize sectionName }}/schema'\n$1`,
      },
      {
        type: "modify",
        path: "{{ turbo.paths.root }}/apps/sanity/src/lib/schemas/sections.ts",
        pattern: /(\/\/ end of section array)/g,
        template: `{{ loweraseFirstLetter sectionName }},\n$1`,
      },
    ],
  });
}
