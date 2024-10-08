import { useState } from "react";
import { CloseCircleIcon, SearchIcon } from "@sanity/icons";
import { Autocomplete, Box, Select, Stack } from "@sanity/ui";
import styled from "styled-components";

import type {
  OnItemAppend,
  Preset,
  RenderItemProps,
  RenderItemViewProps,
  RenderViewProps,
} from "./types";

const DefaultRenderItemView = ({ preset }: RenderItemViewProps) => {
  const height = 100 + Math.round(Math.random() * 300);

  return (
    <div style={{ height }}>
      <h4>{preset.meta?.title}</h4>
      <p>{preset.name}</p>
    </div>
  );
};

const ItemContainer = styled.div`
  font-size: 10px;
  overflow: hidden;
  background-color: #242424b5;
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00000026;
  padding-top: 6px;

  button.primary {
    flex: none;
    min-width: 50px;
    padding: 4px 12px;
    background-color: #1a345a;
    align-self: flex-end;
    border-radius: 5px;
    &:hover {
      background-color: #203e6c;
    }
  }

  .title {
    padding: 2px;
    cursor: zoom-in;
    button {
      border: none;
      background: none;
      text-align: left;
    }
    &:hover {
      background-color: #ffffff1c;
      cursor: zoom-in;
    }
  }
`;

const DefaultRenderItem = ({
  preset,
  onItemAppend,
  selectSinglePreset,
  renderItemView,
}: RenderItemProps) => {
  const handleClick = () => {
    onItemAppend(preset.value);
  };

  const handleSelectSingle = () => {
    selectSinglePreset(preset);
  };

  return (
    <ItemContainer>
      <div>{renderItemView({ preset })}</div>
      <ItemActions>
        <div className="title">
          <button onClick={handleSelectSingle} style={{ textWrap: "wrap" }}>
            {preset.meta?.title}
          </button>
        </div>
        <button className="primary" onClick={handleClick}>
          Add
        </button>
      </ItemActions>
    </ItemContainer>
  );
};

const ViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 16px;
`;

const PopupInnerContainer = styled.div`
  max-height: 40vh;
  overflow-y: auto;
`;

const PopupToolbar = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ViewColumnContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-base: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  width: 50px;
`;

const RenderColumn = ({
  presets,
  position,
  columns,
  renderItem,
  renderItemView,
  onItemAppend,
  selectSinglePreset,
}: RenderViewProps & { position: number; columns: number }) => {
  const presetsColumns = presets.filter((_, i) => i % columns === position);
  return (
    <ViewColumnContainer>
      {presetsColumns.map((preset) => (
        <div key={preset.value._key}>
          {renderItem({
            preset,
            onItemAppend,
            selectSinglePreset,
            renderItemView,
          })}
        </div>
      ))}
    </ViewColumnContainer>
  );
};

const DefaultRenderView = ({
  presets,
  renderItem,
  renderItemView,
  onItemAppend,
  selectSinglePreset,
}: RenderViewProps) => {
  const columns = 3;
  const rendersArray = new Array(columns).fill(1).map((_, i) => i);

  return (
    <div>
      <PopupInnerContainer>
        <ViewContainer>
          {rendersArray.map((c) => (
            <RenderColumn
              key={c}
              presets={presets}
              renderItem={renderItem}
              renderItemView={renderItemView}
              onItemAppend={onItemAppend}
              position={c}
              columns={columns}
              selectSinglePreset={selectSinglePreset}
            />
          ))}
        </ViewContainer>
      </PopupInnerContainer>
    </div>
  );
};

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  color: #595959;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;

  &:hover {
    color: #b6b6b6;
  }
`;

type Props = {
  onClose: () => void;
  onItemAppend: OnItemAppend;
  presets: Preset[];
  renderView?: (props: RenderViewProps) => React.ReactNode;
  renderItem?: (props: RenderItemProps) => React.ReactNode;
  renderItemView?: (props: RenderItemViewProps) => React.ReactNode;
};

const BlocksBrowser = ({
  onClose,
  onItemAppend,
  presets,
  renderView = (props) => <DefaultRenderView {...props} />,
  renderItem = (props) => <DefaultRenderItem {...props} />,
  renderItemView = (props) => <DefaultRenderItemView {...props} />,
}: Props) => {
  const [singleViewName, setSingleViewName] = useState<string>("");
  const [filterTitle, setFilterTitle] = useState<string>("");
  const [areaFilter, setAreaFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [typesFilter, setTypesFilter] = useState<string>("all");
  const [nameFilter, setNameFilter] = useState<string>("all");

  console.log("presets2");
  console.log(presets);

  const searchOptions = presets.map((p) => ({ value: p.meta?.title }));
  const areaOptionsSet = new Set(presets.map((p) => p.meta.area));
  const categoryOptionsSet = new Set(presets.map((p) => p.meta.category));
  const typesOptionsSet = new Set(presets.map((p) => p.value._type));
  const nameOptionsSet = new Set(presets.map((p) => p.name));

  const handleSearchByName = (value: any) => {
    setFilterTitle(value || "");
  };

  const handleSelect = (setFn: any) => (e: any) => {
    const value = e.target.value;
    console.log("🚀 ~ handleSelect ~ value:", value);
    setFn(value);
  };

  const filteredPresets = presets
    .filter((p) => !!p.meta?.title?.match(filterTitle))
    .filter((p) => (areaFilter === "all" ? true : p.meta.area === areaFilter))
    .filter((p) =>
      categoryFilter === "all" ? true : p.meta.category === categoryFilter,
    )
    .filter((p) =>
      typesFilter === "all" ? true : p.value._type === typesFilter,
    )
    .filter((p) => (nameFilter === "all" ? true : p.name === nameFilter));

  const preset = singleViewName
    ? presets.find((p) => p.name === singleViewName)
    : undefined;

  const selectSinglePreset = (p?: Preset) => {
    if (!p) {
      setSingleViewName("");
    }
    setSingleViewName(p!.name);
  };

  const resetSinglePreset = () => setSingleViewName("");

  return (
    <Box>
      <CloseButton onClick={onClose}>
        <CloseCircleIcon />
      </CloseButton>
      <Stack>
        <PopupToolbar>
          <Autocomplete
            style={{ width: 300, flexGrow: 2 }}
            fontSize={[1, 1, 1]}
            padding={[1, 1, 2]}
            icon={SearchIcon}
            id="search"
            options={searchOptions}
            placeholder="Search options"
            value={filterTitle}
            filterOption={(query, option) => {
              console.log("option.value, query");
              console.log(option.value, query);

              handleSearchByName(query);
              return !!option.value.match(query);
            }}
          />

          <Select
            fontSize={[1, 1, 1]}
            padding={[1, 1, 2]}
            space={[2, 2, 3]}
            onChange={handleSelect(setAreaFilter)}
          >
            <option value={"all"}>All Areas</option>
            {[...areaOptionsSet].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </Select>

          <Select
            fontSize={[1, 1, 1]}
            padding={[1, 1, 2]}
            space={[2, 2, 3]}
            onChange={handleSelect(setCategoryFilter)}
          >
            <option value={"all"}>All Categories</option>
            {[...categoryOptionsSet].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </Select>

          <Select
            fontSize={[1, 1, 1]}
            padding={[1, 1, 2]}
            space={[2, 2, 3]}
            onChange={handleSelect(setTypesFilter)}
          >
            <option value={"all"}>All Types</option>
            {[...typesOptionsSet].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </Select>

          <Select
            fontSize={[1, 1, 1]}
            padding={[1, 1, 2]}
            space={[2, 2, 3]}
            onChange={handleSelect(setNameFilter)}
          >
            <option value={"all"}>All Names</option>
            {[...nameOptionsSet].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </Select>
        </PopupToolbar>
        {singleViewName ? (
          <Box>
            {renderItem({
              onItemAppend,
              preset: preset!,
              selectSinglePreset: resetSinglePreset,
              // @ts-ignore
              renderItemView,
            })}
          </Box>
        ) : (
          <Box>
            {renderView({
              presets: filteredPresets,
              onItemAppend,
              renderItem,
              // @ts-ignore
              renderItemView,
              selectSinglePreset,
            })}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default BlocksBrowser;
