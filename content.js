setTimeout(() => {
  const interval = setInterval(() => {
    const bl = document.getElementById("blobby-left");
    const nfw = document.getElementById("nitro-floating-wrapper");
    const rs = document.getElementById("right-sidebar");

    if (!bl && !nfw && !rs) {
      clearInterval(interval);
      return;
    }

    bl?.remove();
    nfw?.remove();
    rs?.remove();
  }, 200);
}, 200);
