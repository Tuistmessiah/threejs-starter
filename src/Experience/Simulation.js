import Engine from '../Mechanics/Engine.js';

import Environment from './World/Environment.js';
import Floor from './World/Floor.js';
import Fox from './World/Fox.js';
import Model3D from './World/Model3D.js';

import sources from './sources.js';

/**
 * Main logic
 */
export default class Simulation {
    constructor(_canvas) {
        this.engine = new Engine(_canvas, this, sources);
        this.scene = this.engine.scene;

        this.engine.resources.on('ready', () => {
            this.floor = new Floor(engine);
            // this.fox = new Fox(engine);
            this.fox1 = new Model3D(engine, 'foxModel', 'fox2', { scale: 0.02 });
            this.environment = new Environment(engine);
        });
    }

    // Main Loop: Ran by the engine
    update() {
        if (this.fox) this.fox.update();
    }
}
