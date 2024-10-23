/* Use only frontend libraries here.
You can organize your files into subdirectories here.
Here the extension .ts and .js is used.
You are free to make as many exports or calls (including asynchronous) as you want here.
Different from frontend/components, the scripts here are not automatically delivered to the client.
They need to be imported by the frontend/components. The intention here is to group common functions/objects for React Functions/Components, such as form field validations.
You can also have frontend/files in common for other frontend/files.
 */
function returnHello() {
  return "Hello";
}

export { returnHello };
