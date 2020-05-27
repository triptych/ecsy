import test from "ava";
import { World, System } from "../../src/index.js";

test("registerSystems", t => {
  let world = new World();

  class SystemA extends System {}
  class SystemB extends System {}

  world.registerSystem(SystemA);
  t.is(world.systemManager._systems.length, 1);
  world.registerSystem(SystemB);
  t.is(world.systemManager._systems.length, 2);

  // Can't register twice the same system
  world.registerSystem(SystemA);
  t.is(world.systemManager._systems.length, 2);
});

test("passes attributes to system.init", t => {
  var world = new World();

  var mockAttributes = { test: 10 };
  var initArg1;

  class mockSystem {
    init(attributes) {
      initArg1 = attributes;
    }
  }

  world.registerSystem(mockSystem, mockAttributes);
  t.is(initArg1, mockAttributes);
});  

test("registerSystems with different systems matching names", t => {
  let world = new World();

  function importSystemA() {
    class SystemWithCommonName extends System {}
    return SystemWithCommonName;
  }
  function importSystemB() {
    class SystemWithCommonName extends System {}
    return SystemWithCommonName;
  }

  let SystemA = importSystemA();
  let SystemB = importSystemB();

  world.registerSystem(SystemA);
  t.is(world.systemManager._systems.length, 1);
  world.registerSystem(SystemB);
  t.is(world.systemManager._systems.length, 2);

  // Can't register twice the same system
  world.registerSystem(SystemA);
  t.is(world.systemManager._systems.length, 2);
});
