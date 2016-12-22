#!/bin/zsh
echo "the current script assumes a debian linux environment with zsh, and pyenv virtualenv already setup"
echo "Do you wish to continue?"
select yn in "Yes" "No"; do
    case $yn in
        Yes )

#setup the pyenv for reps
pyenv install 3.5.1;
pyenv virtualenv 3.5.1 small_app;
echo "small_app" > .python-version;
#pip install project dependancies
pip install -r requirements.txt;
cd ../website-service
npm install
gnome-terminal -e 'webpack-dev-server --inline --hot'

echo '\n\nplease enter: export FLASK_APP=manage.py, then: python -m flask run';
exit;
;;
        No ) exit;;

esac
done
