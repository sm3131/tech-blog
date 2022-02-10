const router = require('express').Router();
const { Comment } = require('../../models');
//const withAuth = require('../../utils/auth');

//Route to GET all comments
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: [
            'id',
            'comment_text',
            'user_id',
            'post_id'
        ]
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// router.get('/user', (req,res) => {
//     Comment.findAll({
//         where: {
//             user_id: res.session.user_id
//         },
//         attributes: [
//             'id',
//             'comment_text',
//             'user_id',
//             'post_id'
//         ]
//     })
//     .then(dbCommentData => res.json(dbCommentData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// })

// router.post('/', withAuth, (req, res) => {
//     // check the session
//     if (req.session) {
//       Comment.create({
//         comment_text: req.body.comment_text,
//         post_id: req.body.post_id,
//         // use the id from the session
//         user_id: req.session.user_id
//       })
//         .then(dbCommentData => res.json(dbCommentData))
//         .catch(err => {
//           console.log(err);
//           res.status(400).json(err);
//         });
//     }
//   });

//Route to create a new comment
router.post('/', (req, res) => {
    // check the session
      Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        // use the id from the session
        user_id: req.session.user_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
  });

// router.delete('/:id', withAuth, (req, res) => {
//     Comment.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbCommentData => {
//             if (!dbCommentData) {
//                 res.status(404).json({ message: 'No comment found with this id' });
//                 return;
//             }
//             res.json(dbCommentData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

//Route to delete a comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;