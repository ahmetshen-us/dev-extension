function getElementsStartsWithId( id ) {
  var children = document.body.getElementsByTagName('*');
  var elements = [], child;
  for (var i = 0, length = children.length; i < length; i++) {
    child = children[i];
    if (child.id.substr(0, id.length) == id)
      elements.push(child);
  }
  return elements;
}

function remove(){
// try
//   {
//     document.getElementById('pagelet_ego_pane_w').innerHTML = '';
//   }
  try
  {
    getElementsStartsWithId('dealply-toast').innerHTML = '';
  }
catch(err)
  {
    //Skip if "pagelet_ego_pane_w" div tag isn't on this page
  }

console.log('All ads have been removed.');
setTimeout(function(){remove();},1000);
}
remove();