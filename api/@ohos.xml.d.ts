/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.
 * @since 8
 * @sysCap SystemCapability.CCRuntime
 * @devices phone, tablet
 * @import import xml from '@ohos.xml';
 * @permission N/A
 */
declare namespace xml {
    class XmlSerializer {
        /**
         * A parameterized constructor used to create a new XmlSerializer instance.
         * As the input parameter of the constructor function, init supports three types.
         * The input parameter is an Arrarybuff.
         * The input parameter is a DataView.
         * The input parameter is an encoding format of string type.
         */
        constructor(buffer: ArrayBuffer | DataView, encoding?: string);

        /**
         * Write an attribute.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param name Key name of the attribute.
         * @param value Values of attribute.
         */
        setAttributes(name: string, value: string): void;

        /**
         * Add an empty element.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param name Key name of the attribute.
         * @param value Values of element.
         */
        addEmptyElement(name: string): void;

        /**
         * Writes xml declaration with encoding. For example: <?xml version="1.0" encoding="utf-8"?>.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        setDeclaration(): void;

        /**
         * Writes a elemnet start tag with the given name.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param name name of the element.
         */
        startElement(name: string): void;

        /**
         * Writes end tag of the element.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        endElement(): void;

        /**
         * Writes the namespace of the current element tag.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param prefix Values name of the prefix.
         * @param namespace Values of namespace.
         */
        setNamespace(prefix: string, namespace: string): void;

        /**
         * Writes the commnet.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param text Values of commnet.
         */
        setCommnet(text: string): void;

        /**
         * Writes the CDATA.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param text Values of CDATA.
         */
        setCData(text: string): void;

        /**
         * Writes the text.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param text Values of text.
         */
        setText(text: string): void;

        /**
         * Writes the DOCTYPE.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param text Values of docType.
         */
        setDocType(text: string): void;
    }

    enum EventType {
        /**
          * Start a document.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        START_DOCUMENT,
        /**
          * End a document.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        END_DOCUMENT,
        /**
          * Start a tag.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        START_TAG,
        /**
          * End a tag.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        END_TAG,
        /**
          * Character data.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        TEXT,
        /**
          * A CDATA sections.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        CDSECT,
        /**
          * An XML comment.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        COMMENT,
        /**
          * An XML document type declaration.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        DOCDECL,
        /**
          * An XML processing instruction declaration.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        INSTRUCTION,
        /**
          * An entity reference.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        ENTITY_REFERENCE,
        /**
          * a whitespace.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        WHITESPACE
    }

    /** The current parse info.  */
    interface ParseInfo {
        /**
          * The current column number, starting from 1.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        getColumnNumber(): number;
        /**
          * The current depth of the element.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        getDepth(): number;
        /**
          * The current line number, starting from 1.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        getLineNumber(): number;
        /**
          * The current element's name.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        getName(): string;
        /**
          * The current element's namespace.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        getNamespace(): string;
        /**
          * The current element's prefix.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        getPrefix(): string;
        /**
          * The text content of the current event as String.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        getText(): string;
        /**
          * Returns true if the current element is empty.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        isEmptyElementTag(): boolean;
        /**
          * Checks whether the current TEXT event contains only whitespace characters.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        isWhitespace(): boolean;
        /**
          * Returns the number of attributes of the current start tag.
          * @since 8
          * @sysCap SystemCapability.CCRuntime
          */
        getAttributeCount(): number;
    }

    /** parse options for XmlPullParser. */
    interface ParseOptions {

        /**
         * Whether to parsing Doctype of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        supportDoctype?: boolean;

        /**
         * Whether to ignore parsing texts of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreNameSpace?: boolean;

        /**
         * tag value callback function.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param name The current tag name.
         * @param value The current tag value.
         * @return Returns a Boolean variable for whether parse continually.
         */
        tagValueCallbackFunction?: (name: string, value: string) => boolean;

        /**
         * attribute value callback function.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param name The current attribute name.
         * @param value The current attribute value.
         * @return Returns a Boolean variable for whether parse continually.
         */
        attributeValueCallbackFunction?: (name: string, value: string) => boolean;

        /**
         * token value callback function.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param eventType The current token eventtype.
         * @param value The current token parseinfo.
         * @return Returns a Boolean variable for whether parse continually.
         */
        tokenValueCallbackFunction?: (eventType: EventType, value: ParseInfo) => boolean;
    }

    class XmlPullParser {
        /**
          * A constructor used to create a new XmlPullParser instance.
          */
        constructor(buffer: ArrayBuffer | DataView, encoding?: string);

        /**
         * Starts parsing the XML file.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         * @param option parse options for XmlPullParser, the interface including two Boolean variables and three callback functions.
         */
        parse(option: ParseOptions): void;
    }
}
export default xml;