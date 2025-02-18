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
