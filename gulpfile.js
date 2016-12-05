var elixir = require('laravel-elixir');

/*
|--------------------------------------------------------------------------
| Config
|--------------------------------------------------------------------------
*/

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';
elixir.config.css.sass.folder = '';

/*
|--------------------------------------------------------------------------
| MaterialCraft
|--------------------------------------------------------------------------
*/

elixir(function(mix) {
  mix.sass('MaterialCraft/materialcraft.scss', 'dist/materialcraft.css')
     .sass('MaterialCraft-Blue/materialcraft.scss', 'dist/materialcraft-blue.css')
     .sass('MaterialCraft-Dark/materialcraft.scss', 'dist/materialcraft-dark.css')
     .sass('MaterialCraft-Purple/materialcraft.scss', 'dist/materialcraft-purple.css')
     .sass('MaterialCraft-Red/materialcraft.scss', 'dist/materialcraft-red.css');
});
