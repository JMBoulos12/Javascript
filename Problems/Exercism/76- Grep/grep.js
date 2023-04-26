



/**
  #Instructions
  Search a file for lines matching a regular expression pattern. Return the line number and contents of each matching line.

  The Unix grep command can be used to search for lines in one or more files that match a user-provided search query (known as the pattern).

  The grep command takes three arguments:

  * The pattern used to match lines in a file.
  * Zero or more flags to customize the matching behavior.
  * One or more files in which to search for matching lines.
  
  Your task is to implement the grep function, which should read the contents of the specified files, 
  find the lines that match the specified pattern and then output those lines as a single string. 
  Note that the lines should be output in the order in which they were found, with the first matching line in the first file being output first.

  As an example, suppose there is a file named "input.txt" with the following contents:
  hello
  world
  hello again
  
  If we were to call grep "hello" input.txt, the returned string should be:
  hello
  hello again
  
  #Flags
  As said earlier, the grep command should also support the following flags:

  * -n Print the line numbers of each matching line.
  * -l Print only the names of files that contain at least one matching line.
  * -i Match line using a case-insensitive comparison.
  * -v Invert the program -- collect all lines that fail to match the pattern.
  * -x Only match entire lines, instead of lines that contain a match.
  
  If we run grep -n "hello" input.txt, the -n flag will require the matching lines to be prefixed with its line number:
  1:hello
  3:hello again
  
  And if we run grep -i "HELLO" input.txt, we'll do a case-insensitive match, and the output will be:
  hello
  hello again
  
  The grep command should support multiple flags at once.

  For example, running grep -l -v "hello" file1.txt file2.txt should print the names of files that do not contain the string "hello".

  #Node process
  Unlike other exercises, grep.js is not imported inside the test file grep.spec.js. 
  Instead, it will be used as if it's an executable. To facilitate that, the grep.js file has been set-up with a shebang, 
  and a comment that explains what this does:

  #!/usr/bin/env node

  // The above line is a shebang. On Unix-like operating systems, or environments,
  // this will allow the script to be run by node, and thus turn this JavaScript
  // file into an executable. In other words, to execute this file, you may run
  // the following from your terminal:
  //
  // ./grep.js args
  //
  // If you do not have a Unix-like operating system or environment, for example
  // Windows without WSL, you can use the following inside a window terminal,
  // such as cmd.exe:
  //
  // node grep.js args
  //
  // Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)
  The tests will start a new node process, executing grep.js.

  #Reading arguments
  In order to retrieve the arguments the process was started with, use process.argv.

  #Reading files
  The function readLines has been provided. There is no need to transform the file path in order to use it. 
  The readlines function will resolve the path from the current working directory, which, for the grep.js processes is set to the exercise directory.

  #Writing output
  In order to write output use

  * console.log to write to the standard output stream,
  * console.error to write to the standard error stream.
  
  The tests consider execution to be successful (resolved) if nothing is written to the standard error stream, and not successful (rejected) 
  if something is written to the standard error stream.
  
  26-April-2023
*/


#!/usr/bin/env node
const fs = require('fs');
const opts = {
  lineNumbers:     false, // -n
  caseInsensitive: false, // -i
  fileNameOnly:    false, // -l
  wholeLine:       false, // -x
  inverted:        false, // -v
};
function main() {
  let args = parseOptions(process.argv.slice(2));
  if (args.length < 2) {
    console.error('usage: grep.js [options] pattern file [...]');
    process.exit(1);
  }
  let pattern = getPattern(args.shift());
  opts.multipleFiles = (args.length > 1);
  args.forEach(filename => {
    processFile(filename, pattern);
  });
}
function parseOptions(args) {
  while (args[0].startsWith('-')) {
    let option = args.shift();
    switch (option) {
      case '-n':
        opts.lineNumbers = true;
        break;
      case '-i':
        opts.caseInsensitive = true;
        break;
      case '-l':
        opts.fileNameOnly = true;
        break;
      case '-x':
        opts.wholeLine = true;
        break;
      case '-v':
        opts.inverted = true;
        break;
      default:
        console.error('Error: unknown option ' + option);
        process.exit(1);
    }
  }
  return args;
}
function getPattern(patternString) {
  if (opts.wholeLine) {
    patternString = '^' + patternString + '$';
  }
  return new RegExp(patternString, opts.caseInsensitive ? 'i' : '');
}
function processFile(filename, pattern) {
  // TODO: validate file exists and is readable
  const lines = fs.readFileSync(filename, 'utf8').split('\n');
  // XOR is a bitwise operator that requires ints, not booleans.
  const inv = opts.inverted ? 1 : 0;
  let lineNum = 1;
  for (const line of lines) {
    const match = line.match(pattern) ? 1 : 0;
    if (inv ^ match) { // XOR: inv or match but not both
      emit(filename, line, lineNum);
      if (opts.fileNameOnly) {
        break;
      }
    }
    lineNum += 1;
  }
}
function emit(filename, line, lineNum) {
  const output = [];
  if (opts.fileNameOnly) {
    output.push(filename);
  }
  else {
    if (opts.multipleFiles) {
      output.push(filename);
    }
    if (opts.lineNumbers) {
      output.push(lineNum);
    }
    output.push(line);
  }
  console.log(output.join(':'));
}
main();
