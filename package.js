Package.describe({
  name: 'andruschka:bootstrap-paper',
  summary: 'Bootstrap with paper theme. Material is the metaphor!',
  version: '1.0.0',
  git: 'https://github.com/andruschka/meteor-bootstrap-paper.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
	api.use('ian:bootstrap-3');
  api.addFiles('paper.css', 'client');
});