window.addEventListener('DOMContentLoaded', function(){
  const triangleBefore = document.getElementById('accordion_tr_before');
  const triangleAfter = document.getElementById('accordion_tr_after');
  const childRecord = document.getElementsByClassName('candidates_linked_child');
  triangleBefore.addEventListener('click', () => {
    console.log('before'+childRecord);
    for(i = 0; i < childRecord.length; i++){
      childRecord[i].classList.remove('unvisible');
      triangleBefore.classList.add('unvisible');
      triangleAfter.classList.remove('unvisible');
    }
  });
  triangleAfter.addEventListener('click', () => {
    console.log(triangleBefore);
    console.log('after'+childRecord);
    for(j = 0; j < childRecord.length; j++){
      childRecord[j].classList.add('unvisible');
      triangleBefore.classList.remove('unvisible');
      triangleAfter.classList.add('unvisible');
    }
  });
});

