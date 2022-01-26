export class Helper {
  private static visited = Symbol('visited');
  private static stopProcessing = false;

  static copy(object: any): any {
    // dates
    if (object instanceof Date) {
      return new Date(object.getTime());
    // arrays
    } else if (object instanceof Array) {
      const target = [];

      for (const obj of object) {
        target.push(Helper.copy(obj));
      }

      return target;
    // objects
    } else if (object instanceof Object) {
      if(object[this.visited]) {
        delete object[this.visited];
        return object;
      }

      if(this.stopProcessing) {
        return object;
      }

      object[this.visited] = true;

      const target: any = {};

      for (const prop in object) {
        if (object.hasOwnProperty(prop)) {
          if(object[this.visited]) {
            delete object[this.visited];
            this.stopProcessing = true;
          }

          target[prop] = Helper.copy(object[prop]);
        }
      }

      this.stopProcessing = false;
      return target;
    } else {
      // it's a primitive
      return object;
    }
  }
}