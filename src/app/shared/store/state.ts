import { Folder } from "../models/folder";

export interface State {
  folders: Folder[];
  selectedFoldersIds: number[];
  deletedFoldersIds: number[];
  activeApplication: string;
}
