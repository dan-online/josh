type key = string | number;
type path = string | null;
type mappedToObject = { [key: string]: any };
interface JoshProvider {
  new (options: { name: string; [key: string]: any }): JoshProvider;
  init(): Promise<boolean>;
  get(key: key, path?: path): any;
  getAll(): mappedToObject;
  getMany(array: key[]): mappedToObject;
  random(count?: number): mappedToObject;
  randomKey(count?: number): key[];
  has(key: key, path?: path): boolean;
  keys(): key[];
  values(): any[];
  count(): number;
  set(key: key, path: path, value: any): JoshProvider;
  setMany(object: mappedToObject, overwrite: boolean): JoshProvider;
  delete(key: key, path?: path): JoshProvider;
  deleteMany(keys: key[]): JoshProvider;
  clear(): JoshProvider;
  push(key: key, path: path, value: any, allowDupes: boolean): JoshProvider;
  remove(key: key, path: path, value: any): JoshProvider;
  includes(key: key, path: path, value: any): boolean;
  inc(key: key, path: path): JoshProvider;
  dec(key: key, path: path): JoshProvider;
  math(key: key, path: path, operation: string, operand: number): JoshProvider;
  findByValue(path: path, value: any): [key: key, value: any];
  findByFunction(
    fn: (value: any) => boolean,
    path: path,
  ): [key: key, value: any];
  filterByValue(path: path, value: any): [key: key, value: any][];
  filterByFunction(
    fn: (value: any) => boolean,
    path: path,
  ): [key: key, value: any];
  mapByValue(path: path): any[]; // depends on what we make the api return
  mapByFunction(fn: (value: any, key: key) => any): any[];
  someByValue(value: any, path: path): boolean;
  someByFunction(fn: (value: any, path: path) => boolean): boolean;
  everyByValue(value: any, path: path): boolean;
  everyByFunction(fn: (value: any, path: path) => boolean): boolean;
  autoId(): string;
  // setMany();
}

export { JoshProvider };
