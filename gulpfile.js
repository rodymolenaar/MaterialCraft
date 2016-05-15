var elixir = require('laravel-elixir');

/*
|--------------------------------------------------------------------------
| Config
|--------------------------------------------------------------------------
*/

elixir.config.assetsPath = 'themes';
elixir.config.publicPath = 'themes';
elixir.config.css.sass.folder = '';

/*
|--------------------------------------------------------------------------
| MaterialCraft
|--------------------------------------------------------------------------
*/

elixir(function(mix) {
  mix.sass('MaterialCraft/src/materialcraft.scss', 'themes/MaterialCraft/dist/materialcraft.css')
     .sass('MaterialCraft-Blue/src/materialcraft.scss', 'themes/MaterialCraft-Blue/dist/materialcraft.css')
     .sass('MaterialCraft-Dark/src/materialcraft.scss', 'themes/MaterialCraft-Dark/dist/materialcraft.css')
     .sass('MaterialCraft-Red/src/materialcraft.scss', 'themes/MaterialCraft-Red/dist/materialcraft.css');
});
