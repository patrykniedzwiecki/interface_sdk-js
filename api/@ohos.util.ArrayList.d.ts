/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * ArrayList is a linear data structure that is implemented based on arrays. 
 * ArrayList can dynamically adjust the capacity based on project requirements. It increases the capacity by 50% each time.
 *
 * @namespace ArrayList
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 8
 */
declare class ArrayList<T> {
  /**
   * A constructor used to create a ArrayList object.
   *
   * @throws { BusinessError } 10200012 - The ArrayList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  constructor();
  /**
   * Gets the element number of the ArrayList.This is a number one higher than the highest index in the arraylist.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  length: number;
  /**
   * Appends the specified element to the end of this arraylist.
   *
   * @param { T } element - element element to be appended to this arraylist
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  add(element: T): boolean;
  /**
   * Inserts the specified element at the specified position in this
   * arraylist. Shifts the element currently at that position (if any) and
   * any subsequent elements to the right (adds one to their index).
   *
   * @param { T } element - element element element to be inserted
   * @param { number } index - index index at which the specified element is to be inserted
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  insert(element: T, index: number): void;
  /**
   * Check if arraylist contains the specified element
   *
   * @param { T } element - element element element to be contained
   * @returns { boolean } the boolean type,if arraylist contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  has(element: T): boolean;
  /**
   * Returns the index of the first occurrence of the specified element
   * in this arraylist, or -1 if this arraylist does not contain the element.
   *
   * @param { T } element - element element element to be contained
   * @returns { number } the number type ,returns the lowest index such that or -1 if there is no such index.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  getIndexOf(element: T): number;
  /**
   * Find the corresponding element according to the index,
   * delete the element, and move the index of all elements to the right of the element forward by one.
   *
   * @param { number } index - index index the index in the arraylist
   * @returns { T } the T type ,returns undefined if arraylist is empty,If the index is
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  removeByIndex(index: number): T;
  /**
   * Removes the first occurrence of the specified element from this arraylist,
   * if it is present.  If the arraylist does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  remove(element: T): boolean;
  /**
   * Returns in the index of the last occurrence of the specified element in this arraylist ,
   * or -1 if the arraylist does not contain the element.
   *
   * @param { T } element - element element element to find
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  getLastIndexOf(element: T): number;
  /**
   * Removes from this arraylist all of the elements whose index is between fromIndex,inclusive,and toIndex ,exclusive.
   *
   * @param { number } fromIndex - fromIndex fromIndex The starting position of the index, containing the value at that index position
   * @param { number } toIndex - toIndex toIndex the end of the index, excluding the value at that index
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The removeByRange method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  removeByRange(fromIndex: number, toIndex: number): void;
  /**
   * Replaces each element of this arraylist with the result of applying the operator to that element.
   *
   * @param { (value: T, index?: number, arrlist?: ArrayList<T>) => T } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to four arguments.The function to be called for
   * each element in the arraylist,Returns the result of an operation
   * @param { Object } thisArg - thisArg thisArg (Optional) The value passed to the function generally uses the "this" value.
   * If this parameter is empty, "undefined" will be passed to the "this" value
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  replaceAllElements(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => T, thisArg?: Object): void;
  /**
   * Executes a provided function once for each value in the arraylist object.
   *
   * @param { (value: T, index?: number, arrlist?: ArrayList<T>) => void } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to four arguments.The function to
   * be called for each element in the arraylist
   * @param { Object } thisArg - thisArg thisArg (Optional) The value passed to the function generally uses the "this" value.
   * If this parameter is empty, "undefined" will be passed to the "this" value
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  forEach(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => void, thisArg?: Object): void;
  /**
   * Sorts this arraylist according to the order induced by the specified comparator,without comparator this parameter,
   * it will default to ASCII sorting
   *
   * @param { (firstValue: T, secondValue: T) => number } comparator - comparator
   * comparator (Optional) A function that accepts up to two arguments.Specifies the sort order.
   * Must be a function,return number type,If it returns firstValue minus secondValue, it returns an arraylist
   * sorted in ascending order;If it returns secondValue minus firstValue, it returns an arraylist sorted in descending order;
   * If this parameter is empty, it will default to ASCII sorting
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  sort(comparator?: (firstValue: T, secondValue: T) => number): void;
  /**
   * Returns a view of the portion of this arraylist between the specified fromIndex,inclusive,and toIndex,exclusive
   *
   * @param { number } fromIndex - fromIndex fromIndex The starting position of the index, containing the value at that index position
   * @param { number } toIndex - toIndex toIndex the end of the index, excluding the value at that index
   * @returns { ArrayList<T> }
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The subArrayList method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  subArrayList(fromIndex: number, toIndex: number): ArrayList<T>;
  /**
   * Removes all of the elements from this arraylist.The arraylist will
   * be empty after this call returns.length becomes 0
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  clear(): void;
  /**
   * Returns a shallow copy of this instance. (The elements themselves are not copied.)
   *
   * @returns { ArrayList<T> } this arraylist instance
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  clone(): ArrayList<T>;
  /**
   * returns the capacity of this arraylist
   *
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getCapacity method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  getCapacity(): number;
  /**
   * convert arraylist to array
   *
   * @returns { Array<T> } the Array type
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  convertToArray(): Array<T>;
  /**
   * Determine whether arraylist is empty and whether there is an element
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  isEmpty(): boolean;
  /**
   * If the newCapacity provided by the user is greater than or equal to length,
   * change the capacity of the arraylist to newCapacity, otherwise the capacity will not be changed
   *
   * @param { number } newCapacity - newCapacity newCapacity
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  increaseCapacityTo(newCapacity: number): void;
  /**
   * Limit the capacity to the current length
   *
   * @throws { BusinessError } 10200011 - The trimToCurrentLength method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  trimToCurrentLength(): void;
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  [Symbol.iterator](): IterableIterator<T>;
}

export default ArrayList;
