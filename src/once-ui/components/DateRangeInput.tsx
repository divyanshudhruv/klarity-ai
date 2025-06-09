"use client";

import React, { useState, useCallback, useEffect } from "react";
import {
  Input,
  DropdownWrapper,
  Flex,
  DateRange,
  DateRangePicker,
  Row,
} from ".";

interface DateRangeInputProps
  extends Omit<
    React.ComponentProps<typeof Input>,
    "onChange" | "value" | "label"
  > {
  id: string;
  startLabel: string;
  endLabel: string;
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  minHeight?: number;
  className?: string;
  style?: React.CSSProperties;
  Dstyle?: React.CSSProperties;
}

interface LocalizedDateRange {
  startDate: string | null;
  endDate: string | null;
}

const formatDateRange = (range: DateRange): LocalizedDateRange => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return {
    startDate: range.startDate?.toLocaleDateString("en-US", options) || null,
    endDate: range.endDate?.toLocaleDateString("en-US", options) || null,
  };
};

export const DateRangeInput: React.FC<DateRangeInputProps> = ({
  id,
  startLabel = "Start",
  endLabel = "End",
  value,
  onChange,
  error,
  minHeight,
  className,
  style,
  Dstyle,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(
    value ? formatDateRange(value) : { startDate: "", endDate: "" }
  );
  useEffect(() => {
    if (value) {
      setInputValue(formatDateRange(value));
    }
  }, [value]);

  const handleDateChange = useCallback(
    (range: DateRange) => {
      setInputValue(formatDateRange(range));
      onChange?.(range);
      if (range.endDate != undefined) {
        setIsOpen(false);
      }
    },
    [onChange]
  );

  const handleInputClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const trigger = (
    <Row fillWidth horizontal="center" style={{ maxWidth: "280px" }}>
      <Input
        id={id}
        placeholder="Start"
        radius="left"
        value={inputValue.startDate ?? ""}
        readOnly
        onClick={handleInputClick}
        cursor="interactive"
        style={{
          textOverflow: "ellipsis",
        }}
        {...rest}
        className="cursor-interactive"
      ></Input>

      <Input
        id={id}
        placeholder="End"
        radius="right"
        value={inputValue.endDate ?? ""}
        readOnly
        onClick={handleInputClick}
        cursor="interactive"
        
        style={{
          textOverflow: "ellipsis",
        }}
        {...rest}
        className="cursor-interactive"
      />
    </Row>
  );

  const dropdown = (
    <Flex padding="8" paddingY="0"center={true} vertical="center" horizontal="center">
      <DateRangePicker value={value} onChange={handleDateChange} style={{scale:"0.9"}} />
    </Flex>
  );

  return (
    <DropdownWrapper
      fillWidth
      trigger={trigger}
      minHeight={minHeight}
      dropdown={dropdown}
      isOpen={isOpen}
      closeAfterClick={false}
      className={className}
      style={{ ...Dstyle }}
      onOpenChange={setIsOpen}
    />
  );
};
