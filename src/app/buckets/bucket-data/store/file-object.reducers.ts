import * as ObjectActions from './file-object.actions';
import {FileObject} from '../file-object.model';

export interface State {
  objects: FileObject[];
  objectSelectedIndex: number;
}

const initialState: State = {
  objects: [
    new FileObject(
      'Test1',
      '2018-02-14',
      1000
    ),
    new FileObject(
      'Test2',
      '2018-02-14',
      1000
    ),
    new FileObject(
      'Test3',
      '2018-02-14',
      1000
    ),
  ],
  objectSelectedIndex: -1
};

export function objectReducer(state = initialState, action: ObjectActions.FileObjectActions ) {
  switch (action.type) {
    case ObjectActions.UPLOAD_OBJECT:
      return {
        ...state,
        objects: [...state.objects, action.payload]
      };
    case ObjectActions.UPDATE_SELECTED_INDEX:
      console.log('Updating selection index: ' + action.selectedIndex);
      return {
        ...state,
        objectSelectedIndex: action.selectedIndex
      };
    case ObjectActions.OBJECTS_FETCHED:
      console.log('After request for fetch files');
      return {
        ...state,
        objects: [...action.payload]
      };

    case ObjectActions.OBJECT_DELETED:
      console.log('After deleting the object.');
      const updatedObjects = [...state.objects];
      updatedObjects.splice(state.objectSelectedIndex, 1);
      return {
        ...state,
        objects: updatedObjects
      };
    default:
      return state;
  }
}
