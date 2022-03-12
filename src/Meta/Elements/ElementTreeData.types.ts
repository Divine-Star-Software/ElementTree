import { Component } from "Meta/Components/Component.type";

export type ElementTypes =
 | "fragment"
 | "div"
 | "span"
 | "pre"
 | "code"
 | "ul"
 | "ol"
 | "li"
 | "article"
 | "aside"
 | "section"
 | "header"
 | "footer"
 | "form"
 | "input"
 | "label"
 | "textarea"
 | "button"
 | "a"
 | "canvas"
 | "iframe"
 | "table"
 | "th"
 | "thead"
 | "tr"
 | "td"
 | "component"
 | "text"
 | "p"
 | "h1"
 | "h2"
 | "h3"
 | "h4"
 | "h5"
 | "h6";

export type ElementAttributes = {
 id?: string;
 className?: string;
 cssText?: string;
 name?: string;
 type?: string;
 dataSet?: Record<string, any>;
 required?: boolean;
 checked?: boolean;
};
export type ElementAttributeList = keyof ElementAttributes;

export type ElementEvents =
 | "onInput"
 | "onReset"
 | "onSearch"
 | "onChange"
 | "onClick"
 | "onDoubleClick"
 | "onContextMenu"
 | "onKeyDown"
 | "onKeyUp"
 | "onKeyPress"
 | "onTouchStart"
 | "onTouchEnd"
 | "onTouchMove"
 | "onTouchStart"
 | "onWheel"
 | "onMouseUp"
 | "onMouseDown"
 | "onMouseOver"
 | "onMouseOver"
 | "onMouseEnter"
 | "onMouseMove"
 | "onMouseLeave"
 | "onFocus"
 | "onFocusIn"
 | "onFocusOut"
 | "onBlur"
 | "onSelect"
 | "onCopy"
 | "onCut"
 | "onPaste"
 | "onDrag"
 | "onDragEnd"
 | "onDragStart"
 | "onDrop";

 export type InputValueTypes = "string" | "number" | "boolean"; 

export type ElementTreeObject = {
 type: ElementTypes;
 component?: {
   func: Component<any>;
   stateProps: any;
   stateObject: Readonly<any>;
  };
 cascade?: {
    origin :  any;
    receiver : (elm : any, cascadeProps : any)=>void;
 };
 bindInput ?: {
    bindTo : any,
    objectPropertyName : string,
    valueType : InputValueTypes;
 };
 toRef?: {
   refObj: any;
   refObjProperty: string;
  };
 attrs?: ElementAttributes;
 events?: { [K in ElementEvents]?: Function };
 text?: string;
 children?: ElementTreeData;
};

type Elements = ElementTreeObject | ElementTreeObject[] | ElementTreeData;
export type ElementTreeData = Elements[];
