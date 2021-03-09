window.addEventListener('load', () => {
  function button(label, ariaLabel, icon, className) {
    const btn = document.createElement('button');
    btn.classList.add('buttonIcon', className);
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', ariaLabel);
    btn.innerHTML =
      '<div class="buttonIcon">' +
      icon +
      '<span class="buttonLabel">' +
      label +
      '</span>' +
      '</div>';
    return btn;
  }

  function addButtons(codeBlockSelector, btn) {
    document.querySelectorAll(codeBlockSelector).forEach((code) => {
      // code.parentNode.appendChild(btn.cloneNode(true));
      code.before(btn.cloneNode(true))
    });
  }

  const copyIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"/></svg>';

  addButtons(
    '.hljs',
    button('Copy', 'Copy code to clipboard', copyIcon, 'btnClipboard'),
  );

  const clipboard = new ClipboardJS('.btnClipboard', {
    target: (trigger) => {
      return trigger.parentNode.querySelector('code');
    },
  });

  clipboard.on('success', (event) => {
    event.clearSelection();
    const textEl = event.trigger.querySelector('.buttonLabel');
    textEl.textContent = 'Copied';
    setTimeout(function () {
      textEl.textContent = 'Copy';
    }, 2000);
  });
});