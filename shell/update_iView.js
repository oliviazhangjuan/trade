/**
 * Created by go_songs on 2017/5/5.
 */
var shell = require('shelljs');

var PATH = {
  iView: 'F:/coolpad-cloudService/git/iview',
  vPush: 'F:/data_analysis/data_analysis_web'
};

var ThrowErr = function (msg) {
  shell.echo(msg);
  shell.exit(1);
}

shell.cd(PATH.iView);
if (shell.exec('git pull').code !== 0) {
  ThrowErr('ERROR: Git pull failed');
}

if (shell.exec('npm run dist:prod').code !== 0) {
  ThrowErr('ERROR: Dist failed');
}

// replace iView
// shell.cp('-Rf', 'dist', PATH.vPush + '/node_modules/iView');
console.log('------- iView updated -------');
