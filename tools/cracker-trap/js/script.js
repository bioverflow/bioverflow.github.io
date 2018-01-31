var _alertIsOpened = false;
// get notified when it's opened/closed or orientation changes
window.addEventListener('onDevToolsChange', function (e) {
  console.log(e.detail)

  var exampleType = document.querySelector('body').dataset.example;
  switch (exampleType) {
    case 'basic':
      basicExample(e);
      break;
    case 'alert':
      alertExample(e);
      break;
    case 'redirect':
      redirectExample(e);
      break;
    default:
      break;
  }
})

function basicExample(e) {
  if (e.detail.open) {
    document.querySelector('#banner').textContent = 'Your app may be hacked'
    document.querySelector('#banner').classList.remove('secure')
    document.querySelector('#banner').classList.add('hacked')
  } else {
    document.querySelector('#banner').textContent = 'Your app is hardened'
    document.querySelector('#banner').classList.remove('hacked')
    document.querySelector('#banner').classList.add('secure')
  }

  document.querySelector('#is-open').textContent = e.detail.open ? 'Yes' : 'No'
  document.querySelector('#orientation').textContent = e.detail.orientation
  document.querySelector('#is-undocked').textContent = e.detail.undocked ? 'Yes' : 'No'
}

function alertExample(e) {
  if (_alertIsOpened === false) {
    var dlgtrigger = document.querySelector('[data-dialog]'),
      somedialog = document.getElementById(dlgtrigger.getAttribute('data-dialog')),
      dlg = new DialogFx(somedialog);

    dlgtrigger.addEventListener('click', dlg.toggle.bind(dlg));

    dlgtrigger.click();
    _alertIsOpened = true;
  }
}

function redirectExample(e) {
  window.location.assign('https://reversebytes.wordpress.com');
}
