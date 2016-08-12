class SettingsConfig {
  constructor() {
    this.name = "simple-test";
    this.dependsOn = [];
    this.styles = [];
    this.scripts = [];
    this.assets = [];
    this.blocks = ["ARTICLE"];
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
// These two lines are necessary for lede to pull in this module at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsConfig;