import * as React from "react";
import { useCombobox, useMultipleSelection } from "downshift";
import clsx from "clsx";

interface AutoCompleteTagInputProps {
  items: string[];
  label: string;
  placeholder?: string;
  value?: string | string[];
  onChange?: (items: string[]) => void;
}

export default function AutoCompleteTagInput({
  items,
  label,
  placeholder,
  value,
  onChange,
}: AutoCompleteTagInputProps) {
  const [inputValue, setInput] = React.useState("");

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection<string>();

  const filteredItems = React.useMemo(
    () =>
      items.filter(
        (item) =>
          selectedItems.indexOf(item) < 0 &&
          item.toLowerCase().startsWith(inputValue.toLowerCase())
      ),
    [items, selectedItems, inputValue]
  );

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    inputValue,
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    selectedItem: null,
    items: filteredItems,
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
          };
      }
      return changes;
    },
    onStateChange: ({ inputValue: input, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          if (typeof input === "string") setInput(input);
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInput("");
            addSelectedItem(selectedItem);
          }
          if (filteredItems.length === 0 && typeof input === "string") {
            addSelectedItem(input);
          }
          break;
        default:
          break;
      }
    },
  });

  React.useEffect(() => {
    onChange?.(selectedItems);
  }, [selectedItems, onChange]);

  return (
    <>
      <div className="form-group mb-0">
        <label {...getLabelProps()}>{label}</label>
        <div className="form-row" {...getComboboxProps()}>
          <input
            className="col-6 form-control"
            {...getInputProps(
              getDropdownProps({
                preventKeyAction: isOpen,
                placeholder,
              })
            )}
          />
        </div>
        {/* list items */}
        <div className="form-row">
          <ul
            className={clsx(
              "position-relative mh-8 col-6 overflow-auto p-0 list-unstyled",
              isOpen && "border"
            )}
            {...getMenuProps()}
          >
            {isOpen &&
              filteredItems.map((item, index) => (
                <li
                  style={
                    highlightedIndex === index
                      ? { backgroundColor: "#bde4ff" }
                      : {}
                  }
                  className="px-2 py-1"
                  key={`${item}`}
                  {...getItemProps({ item, index })}
                >
                  {item}
                </li>
              ))}
            {filteredItems.length === 0 && (
              <li style={{ backgroundColor: "#bde4ff" }} className="px-2 py-1">
                add: {inputValue}
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* Tags */}
      <div className="d-flex">
        {selectedItems.map((selectedItem, index) => (
          <div
            key={`selected-item-${selectedItem}`}
            className="border px-2 py-0 rounded bg-light text-info d-flex justify-content-center align-items-center mr-2"
            {...getSelectedItemProps({ selectedItem, index })}
          >
            {selectedItem}
            <button
              type="button"
              className="close btn"
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                removeSelectedItem(selectedItem);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
