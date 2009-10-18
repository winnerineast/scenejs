/**
 * This is a simple scene graph to demonstrate the general idea. A scene graph basically renders images to
 * one or more OpenGL canvas elements in the browser page. At the core of a scene graph is at least one Shader
 * (which loads a set of vertex and fragment shader scripts written in the OpenGL Shader Language), while the rest
 * of the scene graph is essentially for generating things like matrices, lightsources, material properties,
 * geometry etc. and loading them into the Shader.
 *
 * A key thing to bear in mind when looking over this example is that a scene is traversed in depth-first order, during
 * which each node modifies some bit of scene state on pre-visit and undoes it again it on post-visit. Each node
 * therefore only affects those in the subtree beneath it.
 *
 * This example activates a canvas, activates a Blinn-Phong GLSL shader on that canvas, then renders a perspective
 * projection of a scaled and rotated instance of the venerable OpenGL teapot to that canvas.
 *
 * Lots of wicked scene features are not demonstrated here, such as animation, event flows, multiple canvases,
 * advanced shaders and so on. I'll show you those in more examples later.
 */
with (SceneJs) {

    var scene = graph(

            canvas({ canvasId: 'mycanvas' },

                    shaders.simpleShader(

                            lights({
                                lights: [
                                    {
                                        pos: { x: 0.0, y: 50.0, z: -50.0 }
                                    }
                                ]},
                                    viewport({
                                        x : 1,
                                        y : 1,
                                        width: 400,
                                        height: 400
                                    },
                                            perspective({
                                                fovy : 60.0,
                                                aspect : 1.0,
                                                near : 0.1,
                                                far : 400.0
                                            },

                                                    lookAt({
                                                        eye : { x: 5.0, y: 5.0, z: -7.0 },
                                                        up : { y: 1.0 }
                                                    },

                                                            material({
                                                                ambient: { r:0.0, g:0.2, b:0.2 },
                                                                diffuse: { r:0.0, g:0.0, b:0.4 },
                                                                specular: { r:0.6,g:0.6, b:0.6 }
                                                            },
                                                                    objects.teapot()
                                                                    ) // material
                                                            ) // lookAt
                                                    ) // perspective
                                            ) // viewport
                                    ) // lights
                            ) // smoothShader
                    ) // canvas
            ); // graph

    /* Lets do it - render one frame of the scene graph. To recap, the canvas tag with ID "example-canvas" will display
     * a perspective projection of a teapot, scaled, rotated a little bit, translated back into the Z-axis and shaded.
     *
     * Note that if your scene graph was interactive or animated, you would call this method in a loop.
     */
    scene.traverse();
}

