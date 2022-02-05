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
 * @since 7
 */
interface HyperlinkInterface {
  /**
   * Return to get Hyperlink.
   * address: Web page redirected by the hyperlink component.
   * content: Hyperlinks in the hyperlink component display text.
   * @since 7
   */
  (address: string | Resource, content?: string | Resource): HyperlinkAttribute;
}

/**
 * inheritance CommonMethod
 * @since 7
 */
declare class HyperlinkAttribute extends CommonMethod<HyperlinkAttribute> {
  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
  create(address: string | Resource, content?: string | Resource): HyperlinkAttribute;

  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
  pop(): HyperlinkAttribute;

  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
  debugLine(value: string): HyperlinkAttribute;
 
  /**
   * Set Color
   * @since 7
   */
  color(value: ResourceColor): HyperlinkAttribute;
}

declare const Hyperlink: HyperlinkInterface;
declare const HyperlinkInstance: HyperlinkAttribute;
