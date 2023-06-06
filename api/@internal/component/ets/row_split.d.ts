/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Provides interfaces for layout in the vertical direction.
 * @since 7
 */
/**
 * Provides interfaces for layout in the vertical direction.
 * @crossplatform
 * @since 10
 */
interface RowSplitInterface {
  /**
   * Called when the layout along the vertical direction is set.
   * @since 7
   */
  /**
   * Called when the layout along the vertical direction is set.
   * @crossplatform
   * @since 10
   */
  (): RowSplitAttribute;
}

/**
 * @since 7
 */
/**
 * @crossplatform
 * @since 10
 */
declare class RowSplitAttribute extends CommonMethod<RowSplitAttribute> {
  /**
   * Called when judging whether the split line can be dragged.
   * @since 7
   */
  /**
   * Called when judging whether the split line can be dragged.
   * @crossplatform
   * @since 10
   */
  resizeable(value: boolean): RowSplitAttribute;
}

/**
 * Defines RowSplit Component.
 * @since 7
 */
/**
 * Defines RowSplit Component.
 * @crossplatform
 * @since 10
 */
declare const RowSplit: RowSplitInterface;

/**
 * Defines RowSplit Component instance.
 * @since 7
 */
/**
 * Defines RowSplit Component instance.
 * @crossplatform
 * @since 10
 */
declare const RowSplitInstance: RowSplitAttribute;
