from ._version import version_info, __version__

# Jupyter Extension points
def _jupyter_nbextension_paths():
  return [dict(
      section="notebook",
      # path is relative to the `nb-flowchartjs` module directory
      src="static",
      # directory in the `nbextension/` namespace
      dest="nb-flowchartjs",
      # _also_ in the `nbextension/` namespace
      require="nb-flowchartjs/main")]

