import {LibraryType} from '@/models/library-type.enum';

export interface LibraryItemModel {
  title: string;
  year: string;
  imdbID: string;
  type: LibraryType;
  poster: string;
}
