import {Action} from '@ngrx/store';
import {FileObject} from '../file-object.model';

export const FETCH_OBJECTS = 'FETCH_OBJECTS';
export const OBJECTS_FETCHED = 'OBJECTS_FETCHED';
export const UPLOAD_OBJECT = 'UPLOAD_OBJECT';
export const OBJECT_ADDED = 'OBJECT_ADDED';
export const DELETE_OBJECT = 'DELETE_OBJECT';
export const OBJECT_DELETED = 'OBJECT_DELETED';
export const UPDATE_SELECTED_INDEX = 'UPDATE_SELECTED_INDEX';

export class FetchObjects implements Action {
  readonly type = FETCH_OBJECTS;

  constructor( public bucketId: string) {}
}

export class UploadObject implements Action {
  readonly type = UPLOAD_OBJECT;

  constructor(public payload: FileObject, public bucketId: string ) {}
}

export class DeleteObject implements Action {
  readonly type = DELETE_OBJECT;

  constructor(public objectId: string, public bucketId: string ) {}
}

export class UpdateSelectedIndex implements Action {
  readonly type = UPDATE_SELECTED_INDEX;

  constructor(public selectedIndex: number) {}
}

export class ObjectsFetched implements Action {
  readonly type = OBJECTS_FETCHED;

  constructor(public payload: FileObject[]) {}
}

export class ObjectAdded implements Action {
  readonly type = OBJECT_ADDED;

  constructor( public payload: FileObject) {}
}

export class ObjectDeleted implements Action {
  readonly type = OBJECT_DELETED;

  constructor( public payload: string) {}
}

export type FileObjectActions = FetchObjects | UploadObject | DeleteObject
  | UpdateSelectedIndex | ObjectsFetched | ObjectAdded | ObjectDeleted;
