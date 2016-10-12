"${PYTHON}" setup.py install
"${PREFIX}/bin/jupyter-nbextension" install nb-flowchartjs --py --sys-prefix
