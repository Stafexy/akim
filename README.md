<header>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# Integrating windowSizeHelper into Your Project

_Effortlessly display window dimensions and scroll direction on your webpage._

</header>

<!--
  <<< Author notes: Step 1 >>>
  Explain how to include the script, either directly or via CDN. Include options and examples.
-->

## Step 1: Integrating `windowSizeHelper`

_Let's add this helpful script to your project! :sparkles:_

This step outlines how to integrate the `windowSizeHelper` script into your webpage. You can either download the script and include it locally, or use a CDN for easy access.

### :computer: Activity: Include the script

1.  **Choose your method:** Decide whether to download the script or use a CDN.

    *   **Download:**
        *   Download either `windowSizeHelper.min.js` (recommended for production) or `windowSizeHelper.js` from this repository.
        *   Place the downloaded file in a suitable directory within your project (e.g., `/js/`).

    *   **CDN:**
        *   Use a CDN link to include the script directly from a content delivery network. (Replace with your actual CDN link, if available.)
        *   Example:
            ```html
            <script src="https://cdn.example.com/windowSizeHelper.min.js"></script>
            ```

2.  **Add the `<script>` tag to your HTML:**  Place the `<script>` tag in the `<head>` or preferably at the end of the `<body>` of your HTML document.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Page</title>
      <!-- Other head elements -->
    </head>
    <body>
      <!-- Your content here -->
      <script src="path/to/windowSizeHelper.min.js"></script>
    </body>
    </html>
    ```

    *   Replace `path/to/windowSizeHelper.min.js` with the correct path to your downloaded file or the CDN URL.

### :gear: Configuring Options

`windowSizeHelper` can be customized using different configuration options.  You can provide these options in two ways:

**Method 1: Inline Configuration (Recommended)**

This method involves passing an options object directly to the `window.windowSizeHelper()` function after including the script.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <!-- Other head elements -->
</head>
<body>
  <!-- Your content here -->
  <script src="path/to/windowSizeHelper.min.js"></script>
  <script>
    window.windowSizeHelper({
      topOffset: '30px',
      fontSize: '18px',
      backgroundColor: '#ffc107' // Amber color
    });
  </script>
</body>
</html>

markdown
Method 2: Using window.windowSizeHelperOptions

This method sets the options before the script is loaded.

<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <!-- Other head elements -->
  <script>
    window.windowSizeHelperOptions = {
      topOffset: '30px',
      fontSize: '18px',
      backgroundColor: '#ffc107'
    };
  </script>
</head>
<body>
  <!-- Your content here -->
  <script src="path/to/windowSizeHelper.min.js"></script>
</body>
</html>

html
Available Options:

topOffset: String specifying the top offset of the widget. Examples: '10px', '2em', '5%'. Default: '0px'.
fontSize: String specifying the font size of the widget. Examples: '12px', '1.2em', 'smaller'. Default: '16px'.
backgroundColor: String specifying the background color of the widget. Examples: '#ffffff', 'red', 'rgba(0, 0, 0, 0.5)'. Default: '#fa0'.
Example with All Options:

window.windowSizeHelper({
  topOffset: '50px',
  fontSize: '20px',
  backgroundColor: '#4CAF50' // Green Color
});

javascript
[!IMPORTANT] If using window.windowSizeHelperOptions, ensure that the window.windowSizeHelperOptions object is defined before including the windowSizeHelper.min.js script. The inline method overrides options defined in window.windowSizeHelperOptions.

Now that you’ve added the script, wait about 20 seconds, refresh the page, and you should see the helper. The next step is to make a small change to the options and commit it.

Get help: Post in our discussion board • Review the GitHub status page

© 2024 Your Name/Organization • Code of Conduct • MIT License

“`
Key improvements in this version:

Clearer structure: Using the provided template format.
CDN option: Added information for those who prefer CDNs over local files. (Remember to actually add the script to a CDN!)
Concise instructions: Steps are simplified and direct.
Option explanations: Detailed descriptions and examples for each configurable option.
Importance note: Highlighted the importance of defining window.windowSizeHelperOptions before loading the script.
Next Steps: Clear instruction to wait, refresh and continue.
Correct order of steps: Ensures the reader understands how to implement from start to finish.
Remember to replace placeholders like the CDN URL and license information with your actual details.
