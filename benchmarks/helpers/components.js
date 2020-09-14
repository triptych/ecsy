import { TagComponent } from "../../src/index";
import { Component } from "../../src/Component";
import {
  Types,
  createType,
  copyCopyable,
  cloneClonable
} from "../../src/Types";

export class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.set(x, y, z);
  }

  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  copy(source) {
    this.x = source.x;
    this.y = source.y;
    return this;
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }
}

const Vector3Type = createType({
  name: "Vector3",
  default: new Vector3(),
  copy: copyCopyable,
  clone: cloneClonable
});

export class TagComponentA extends TagComponent {}
export class TagComponentB extends TagComponent {}
export class TagComponentC extends TagComponent {}

export class Component1 extends Component {
  constructor(props) {
    super(false);
    this.attr = (props && props.attr) || 0;
  }

  // copy(source) {
  //   this.attr = source.attr;
  //   return this;
  // }

  // clone() {
  //   return new Component1().copy(this);
  // }

  reset() {
    this.attr = 0;
  }
}
Component1.schema = {
  attr: { type: Types.Number }
};

export class Component2 extends Component {
  constructor(props) {
    super(false);
    this.attr = (props && props.attr) || 0;
    this.attr2 = (props && props.attr2) || 0;
  }

  // copy(source) {
  //   this.attr = source.attr;
  //   this.attr2 = source.attr2;
  //   return this;
  // }

  // clone() {
  //   return new Component2().copy(this);
  // }

  reset() {
    this.attr = 0;
    this.attr2 = 0;
  }
}
Component2.schema = {
  attr: { type: Types.Number },
  attr2: { type: Types.Number }
};

export class Component3 extends Component {
  constructor(props) {
    super(false);
    this.attr = (props && props.attr) || 0;
    this.attr2 = (props && props.attr2) || 0;
    this.attr3 = (props && props.attr3) || new Vector3();
  }

  // copy(source) {
  //   this.attr = source.attr;
  //   this.attr2 = source.attr2;
  //   this.attr3.copy(source.attr3);
  //   return this;
  // }

  // clone() {
  //   return new Component3().copy(this);
  // }

  reset() {
    this.attr = 0;
    this.attr2 = 0;
    this.attr3.set(0, 0, 0);
  }
}
Component3.schema = {
  attr: { type: Types.Number },
  attr2: { type: Types.Number },
  attr3: { type: Vector3Type }
};
/*
export class Component3NoReset extends Component {
  constructor() {
    this.attr = 0;
    this.attr2 = 0;
    this.attr3 = new Vector3();
  }
}

export class BarComponent extends Component {
  constructor() {
    this.variableBar = 0;
  }

  copy(src) {
    this.variableBar = src.variableBar;
  }
}

export class NoCopyComponent extends Component {
  constructor() {
    this.variable = 0;
  }
}
*/
export class EmptyComponent extends Component {}
