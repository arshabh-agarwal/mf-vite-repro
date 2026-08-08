import 'shared-lib';

async function mountRemotes() {
  await import('remote-a/Button');
  await import('remote-b/Card');
  await import('remote-c/Dashboard');
}

mountRemotes();
