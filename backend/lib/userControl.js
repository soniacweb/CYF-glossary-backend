function userControl(...allowed) {
  const isAllowed = role => allowed.indexOf(role) > -1

  return function(req, res, next) {
    if (req.currentUser && isAllowed(req.currentUser.role)) {
      next()
    } else {
      res.status(403).json({ message: 'access denied' })
    }
  }

}



module.exports = useControl