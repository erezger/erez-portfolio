import {BindingOptions} from 'vuex-class/lib/bindings';

export class StoreNamespace {

  // manager namespaces
  public static readonly LIBRARY_MODULE: string = 'library';

  public static readonly LIBRARY: BindingOptions = {namespace: StoreNamespace.LIBRARY_MODULE};
}
