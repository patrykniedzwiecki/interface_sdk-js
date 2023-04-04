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

import { AsyncCallback } from '../../@ohos.base';

/**
 * Provides methods for accessing a database result set generated by querying the database.
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.relationalStore.ResultSet
 */
export interface ResultSet {
  /**
   * Obtains the names of all columns in a result set.
   * The column names are returned as a string array, in which the strings are in the same order
   * as the columns in the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.columnNames
   */
  columnNames: Array<string>;

  /**
   * Obtains the number of columns in the result set.
   * The returned number is equal to the length of the string array returned by the
   * columnCount method.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.columnCount
   */
  columnCount: number;

  /**
   * Obtains the number of rows in the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.rowCount
   */
  rowCount: number;

  /**
   * Obtains the current index of the result set.
   * The result set index starts from 0.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.rowIndex
   */
  rowIndex: number;

  /**
   * Checks whether the result set is positioned at the first row.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isAtFirstRow
   */
  isAtFirstRow: boolean;

  /**
   * Checks whether the result set is positioned at the last row.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isAtLastRow
   */
  isAtLastRow: boolean;

  /**
   * Checks whether the result set is positioned after the last row.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isEnded
   */
  isEnded: boolean;

  /**
   * returns whether the cursor is pointing to the position before the first
   * row.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isStarted
   */
  isStarted: boolean;

  /**
   * Checks whether the current result set is closed.
   * If the result set is closed by calling the close method, true will be returned.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isClosed
   */
  isClosed: boolean;

  /**
   * Obtains the column index based on the specified column name.
   * The column name is passed as an input parameter.
   *
   * @param { string } columnName - Indicates the name of the specified column in the result set.
   * @returns { number } return the index of the specified column.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getColumnIndex
   */
  getColumnIndex(columnName: string): number;

  /**
   * Obtains the column name based on the specified column index.
   * The column index is passed as an input parameter.
   *
   * @param { number } columnIndex - Indicates the index of the specified column in the result set.
   * @returns { string } returns the name of the specified column.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getColumnName
   */
  getColumnName(columnIndex: number): string;

  /**
   * Go to the specified row of the result set forwards or backwards by an offset relative to its current position.
   * A positive offset indicates moving backwards, and a negative offset indicates moving forwards.
   *
   * @param { number } offset - Indicates the offset relative to the current position.
   * @returns { string } returns true if the result set is moved successfully and does not go beyond the range;
   *                   returns false otherwise.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goTo
   */
  goTo(offset: number): boolean;

  /**
   * Go to the specified row of the result set.
   *
   * @param { number } rowIndex - Indicates the index of the specified row, which starts from 0.
   * @returns { boolean } returns true if the result set is moved successfully; returns false otherwise.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToRow
   */
  goToRow(position: number): boolean;

  /**
   * Go to the first row of the result set.
   *
   * @returns { boolean } returns true if the result set is moved successfully;
   *                    returns false otherwise, for example, if the result set is empty.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToFirstRow
   */
  goToFirstRow(): boolean;

  /**
   * Go to the last row of the result set.
   *
   * @returns { boolean } returns true if the result set is moved successfully;
   *                    returns false otherwise, for example, if the result set is empty.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToLastRow
   */
  goToLastRow(): boolean;

  /**
   * Go to the next row of the result set.
   *
   * @returns { boolean } returns true if the result set is moved successfully;
   *                    returns false otherwise, for example, if the result set is already in the last row.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToNextRow
   */
  goToNextRow(): boolean;

  /**
   * Go to the previous row of the result set.
   *
   * @returns { boolean } returns true if the result set is moved successfully;
   *                    returns false otherwise, for example, if the result set is already in the first row.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToPreviousRow
   */
  goToPreviousRow(): boolean;

  /**
   * Obtains the value of the specified column in the current row as a byte array.
   * The implementation class determines whether to throw an exception if the value of the specified column
   * in the current row is null or the specified column is not of the Blob type.
   *
   * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
   * @returns { Uint8Array } returns the value of the specified column as a byte array.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getBlob
   */
  getBlob(columnIndex: number): Uint8Array;

  /**
   * Obtains the value of the specified column in the current row as string.
   * The implementation class determines whether to throw an exception if the value of the specified column
   * in the current row is null or the specified column is not of the string type.
   *
   * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
   * @returns { string } returns the value of the specified column as a string.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getString
   */
  getString(columnIndex: number): string;

  /**
   * Obtains the value of the specified column in the current row as long.
   * The implementation class determines whether to throw an exception if the value of the specified column
   * in the current row is null, the specified column is not of the integer type.
   *
   * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
   * @returns { number } returns the value of the specified column as a long.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getLong
   */
  getLong(columnIndex: number): number;

  /**
   * Obtains the value of the specified column in the current row as double.
   * The implementation class determines whether to throw an exception if the value of the specified column
   * in the current row is null, the specified column is not of the double type.
   *
   * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
   * @returns { number } returns the value of the specified column as a double.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getDouble
   */
  getDouble(columnIndex: number): number;

  /**
   * Checks whether the value of the specified column in the current row is null.
   *
   * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
   * @returns { boolean } returns true if the value of the specified column in the current row is null;
   *                    returns false otherwise.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isColumnNull
   */
  isColumnNull(columnIndex: number): boolean;

  /**
   * Closes the result set.
   * Calling this method on the result set will release all of its resources and makes it ineffective.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.close
   */
  close(): void;
}
