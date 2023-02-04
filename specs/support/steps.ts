import {Given, Then} from "@cucumber/cucumber";
import {Serializer} from "@fluffy/dog/src/Serializer";

Given('I eat a cookie', async function () {
  new Serializer().deserialize('{"foo": "bar"}', 'No matter')
});
