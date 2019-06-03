createDownloadableFile(fileName, content) {
   let link = document.createElement("a");
   link.download = fileName;
   link.href = `data:application/octet-stream,${content}`;
   return link;
 }