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
 * Declare the jump method.
 * @since 7
 */
/**
 * Declare the jump method.
 * @crossplatform
 * @since 10
 */
declare enum RouteType {
  /**
   * The page is not redirected.
   * @since 7
   */
  /**
   * The page is not redirected.
   * @crossplatform
   * @since 10
   */
  None,

  /**
   * Go to the next page.
   * @since 7
   */
  /**
   * Go to the next page.
   * @crossplatform
   * @since 10
   */
  Push,

  /**
   * Redirect to a specified page.
   * @since 7
   */
  /**
   * Redirect to a specified page.
   * @crossplatform
   * @since 10
   */
  Pop,
}

/**
 * Declare the sliding effect of transition.
 * @since 7
 */
/**
 * Declare the sliding effect of transition.
 * @crossplatform
 * @since 10
 */
declare enum SlideEffect {
  /**
   * Swipe left.
   * @since 7
   */
  /**
   * Swipe left.
   * @crossplatform
   * @since 10
   */
  Left,

  /**
   * Swipe right.
   * @since 7
   */
  /**
   * Swipe right.
   * @crossplatform
   * @since 10
   */
  Right,

  /**
   * Swipe top.
   * @since 7
   */
  /**
   * Swipe top.
   * @crossplatform
   * @since 10
   */
  Top,

  /**
   * Swipe bottom.
   * @since 7
   */
  /**
   * Swipe bottom.
   * @crossplatform
   * @since 10
   */
  Bottom,
}

/**
 * Provides interfaces for common transitions.
 * @since 7
 */
/**
 * Provides interfaces for common transitions.
 * @crossplatform
 * @since 10
 */
declare class CommonTransition<T> {
  /**
   * Called when a transition method is required.
   * @since 7
   */
  /**
   * Called when a transition method is required.
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Called when the slide in effect of the transition is set.
   * @since 7
   */
  /**
   * Called when the slide in effect of the transition is set.
   * @crossplatform
   * @since 10
   */
  slide(value: SlideEffect): T;

  /**
   * Called when the translation effect of page transition is set.
   * @since 7
   */
  /**
   * Called when the translation effect of page transition is set.
   * @crossplatform
   * @since 10
   */
  translate(value: { x?: number | string; y?: number | string; z?: number | string }): T;

  /**
   * Called when setting the zoom effect of page transition.
   * @since 7
   */
  /**
   * Called when setting the zoom effect of page transition.
   * @crossplatform
   * @since 10
   */
  scale(value: { x?: number; y?: number; z?: number; centerX?: number | string; centerY?: number | string }): T;

  /**
   * Called when the transparency value of the starting point of entry or the ending point of exit is set.
   * @since 7
   */
  /**
   * Called when the transparency value of the starting point of entry or the ending point of exit is set.
   * @crossplatform
   * @since 10
   */
  opacity(value: number): T;
}

/**
 * Provides an interface for page rotation mode.
 * @since 7
 */
/**
 * Provides an interface for page rotation mode.
 * @crossplatform
 * @since 10
 */
interface PageTransitionEnterInterface extends CommonTransition<PageTransitionEnterInterface> {
  /**
   * Called when page Jump animation is used.
   * @since 7
   */
  /**
   * Called when page Jump animation is used.
   * @crossplatform
   * @since 10
   */
  (value: { type?: RouteType; duration?: number; curve?: Curve | string; delay?: number }): PageTransitionEnterInterface;

  /**
   * Called when the incoming parameter is the normalized progress of the current incoming animation.
   * @since 7
   */
  /**
   * Called when the incoming parameter is the normalized progress of the current incoming animation.
   * @crossplatform
   * @since 10
   */
  onEnter(event: (type?: RouteType, progress?: number) => void): PageTransitionEnterInterface;
}

/**
 * Provide an interface to exit the transition.
 * @since 7
 */
/**
 * Provide an interface to exit the transition.
 * @crossplatform
 * @since 10
 */
interface PageTransitionExitInterface extends CommonTransition<PageTransitionExitInterface> {
  /**
   * Called when the transition is delayed.
   * @since 7
   */
  /**
   * Called when the transition is delayed.
   * @crossplatform
   * @since 10
   */
  (value: { type?: RouteType; duration?: number; curve?: Curve | string; delay?: number }): PageTransitionExitInterface;

  /**
   * Called when the input parameter is the normalized progress of the current exit animation.
   * @since 7
   */
  /**
   * Called when the input parameter is the normalized progress of the current exit animation.
   * @crossplatform
   * @since 10
   */
  onExit(event: (type?: RouteType, progress?: number) => void): PageTransitionExitInterface;
}

/**
 * Defines PageTransitionEnter Component.
 * @since 7
 */
/**
 * Defines PageTransitionEnter Component.
 * @crossplatform
 * @since 10
 */
declare const PageTransitionEnter: PageTransitionEnterInterface;

/**
 * Defines PageTransitionExit Component.
 * @since 7
 */
/**
 * Defines PageTransitionExit Component.
 * @crossplatform
 * @since 10
 */
declare const PageTransitionExit: PageTransitionExitInterface;
