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
 * Provides the interface for the sheet attributes.
 * @since 8
 */
interface SheetInterface {
  /**
   * Create sheet.
   * @since 8
   */
  (): SheetAttribute;
}

/**
 * Declares sheet properties.
 * @since 8
 */
declare class SheetAttribute extends CommonMethod<SheetAttribute> {
  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
  create(): SheetAttribute;

  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
  pop(): SheetAttribute;

  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
  debugLine(value: string): SheetAttribute;
}

declare const Sheet: SheetInterface;
declare const SheetInstance: SheetAttribute;
