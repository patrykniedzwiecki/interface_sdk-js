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

import { CommonMethod } from "./common";
import { ResourceColor } from "./units";

/**
 * CheckboxGroup SelectStatus
 * @since 8
 */
export declare enum SelectStatus {
  /**
   * All checkboxs is selected.
   * @since 8
   */
  All,
  /**
   * Part of the checkbox is selected.
   * @since 8
   */
  Part,
  /**
   * None of the checkbox is selected.
   * @since 8
   */
  None,
}

/**
 * Defines the option of CheckboxGroup.
 * @since 8
 */
export declare interface CheckboxGroupOption {
  /**
   * Setting the group of CheckboxGroup.
   * @since 8
   */
   group?: string;
}

/**
 * Provides an interface for the CheckboxGroup component.
 * @since 8
 */
interface CheckboxGroup extends CheckboxGroupAttribute<CheckboxGroup> {
  /**
   * Called when the CheckboxGroup component is used.
   * @since 8
   */
  (options?: CheckboxGroupOption): CheckboxGroup;
}

/**
 * Defines the attribute functions of CheckboxGroup.
 * @since 8
 */
declare class CheckboxGroupAttribute<T> extends CommonMethod<T> {

  /**
   * setting whether all checkbox is selected.
   * @since 8
   */
   selectAll(value: boolean): T;

  /**
   * setting the display color of checkbox.
   * @since 8
   */
   selectedColor(value: ResourceColor): T;

  /**
   * Called when the selection status changes.
   * @since 8
   */
  onChange(callback: (name: Array<any>, status: SelectStatus) => void): T;
}

export declare class CheckboxGroupExtend<T> extends CheckboxGroupAttribute<T> {}
export declare const CheckboxGroupInterface: CheckboxGroup;
