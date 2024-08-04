# MCVE for Firefox behavior on redirects to local file URLs

Node.js and NPM are required.

1. Install dependencies using `npm install`.
2. Change the absolute paths in the `href` of the 'Direct link' in `index.html` and in the redirect handler in `index.js` according to your local repository path of the file `test.pdf`.
3. Start the minimal web server using `node index.js`.
4. Add `http://localhost:8080/` to the Firefox `LocalFileLinks` (in `policies.json`).
5. Use `about:config` in Firefox to set `network.protocol-handler.expose.file` to `false` and `network.protocol-handler.external.file` to `true`.
6. Use the Firefox settings to set the default action for PDF files to "Open in Firefox".
7. Firefox might need a restart (at least for the changes in step 4).
8. In Firefox, navigate to `http://localhost:8080`.
9. Click on the link that says "Direct link". Firefox will open the file `test.pdf` using the default PDF viewer of the system (e.g. Adobe Reader).
10. Click on the link that says "Link with redirect". Firefox will open the file `test.pdf` using the builtin PDF viewer instead ot the default PDF viewer of the system.
