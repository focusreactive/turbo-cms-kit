import React, { type ComponentType } from "react";
import { AddIcon } from "@sanity/icons";
import { Button, Card, Grid, Popover, Stack, Text } from "@sanity/ui";
import type { ArrayFieldProps } from "sanity";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import BlocksBrowser from "./BlocksBrowser";
import type { BlocksInputCustomProps } from "./types";

const ButtonsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: stretch;
  gap: 16px;
  width: 100%;
  button {
    flex-grow: 1;
  }
`;

type RenderBlocksSelectorProps = {
  onClose: () => void;
};
type ArrayFunctionsProps = {
  onPaste: () => void;
  renderBlocksSelector: (props: RenderBlocksSelectorProps) => React.ReactNode;
};

const ArrayFunctions = ({
  renderBlocksSelector,
  // onPaste,
}: ArrayFunctionsProps) => {
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const handleClose = () => {
    setIsAddOpen(!isAddOpen);
  };
  return (
    <Grid>
      <Popover
        style={{ width: "calc(100% - 48px)" }}
        content={renderBlocksSelector({ onClose: handleClose })}
        padding={4}
        placement="top"
        portal
        open={isAddOpen}
      >
        <ButtonsContainer>
          <Button
            mode="ghost"
            selected={false}
            text="Add section..."
            icon={AddIcon}
            onClick={handleClose}
            disabled={window.location.pathname.startsWith("/presentation/")}
          />
          {/* <Button
            mode="ghost"
            selected={false}
            text="Paste Block..."
            icon={AddIcon}
            onClick={onPaste}
          /> */}
        </ButtonsContainer>
      </Popover>
    </Grid>
  );
};

export const BlocksInput: ComponentType<any> = (
  props: ArrayFieldProps & BlocksInputCustomProps,
) => {
  // @ts-ignore
  const isRichText = props.isRichText;

  const inputProps: ArrayFieldProps["inputProps"] = {
    ...props.inputProps,
    arrayFunctions: () => (
      <ArrayFunctions
        renderBlocksSelector={({ onClose }) => {
          return (
            <BlocksBrowser
              onClose={onClose}
              onItemAppend={(v) =>
                props.inputProps.onItemAppend({ ...v, _key: uuid() })
              }
              presets={props.presets}
              renderItemView={props.renderItemView}
              renderItem={props.renderItem}
              renderView={props.renderView}
            />
          );
        }}
        onPaste={() => console.log("migrating")}
      />
    ),
  };

  return (
    <Stack space={[3, 3, 4, 5]}>
      <Card>
        <Text>{props.name}</Text>
        <Text>{props.description}</Text>
      </Card>

      {isRichText ? (
        <div>
          {props.renderDefault(props)}
          <br />
          <br />
          <br />
          <h1 style={{ fontSize: 24 }}>Preset selector</h1>
          <BlocksBrowser
            onClose={() => ({})}
            onItemAppend={(v) =>
              props.inputProps.onItemAppend({ ...v, _key: uuid() })
            }
            presets={props.presets}
            renderItemView={props.renderItemView}
            renderItem={props.renderItem}
            renderView={props.renderView}
          />
        </div>
      ) : (
        props.inputProps.renderInput(inputProps)
      )}
    </Stack>
  );
};
