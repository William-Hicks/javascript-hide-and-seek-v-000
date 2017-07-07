function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  console.clear();
  var thing = document.querySelectorAll('.ranked-list');
  for (let x = 0; x < thing.length; x++) {
    let list = thing[x].children;
    for (let i = 0; i < list.length; i++) {
      let li = list[i];
      li.innerHTML = parseInt(li.innerHTML) + n
    }
  }
}

function deepestChild() {
  console.clear();
  var node = document.getElementById('grand-node'),
    parse = true,
    count = 0;
  while (parse) {
    var previousNode = node,
      node = node.children[0];
    if (node != undefined) {
      count += 1
    }
    else {
      parse = false
    }
  }
  return previousNode;
}
