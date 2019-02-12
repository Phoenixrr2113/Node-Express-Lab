const express = require('express');

const Blogs = require('../../data/db');

const router = express.Router();

router.get('/:id', (req, res) => {
	Blogs.findById(req.params.id)
		.then(blog => {
			if (blog) {
				res.status(200).json(blog);
			} else {
				res.status(404).json('blog not found');
			}
		})
		.catch(err => res.status(500).json(err));
});

router.get('/', async (req, res) => {
	try {
		const blogs = await Blogs.find(req.body);
		res.status(200).json(blogs);
	} catch (error) {
		res.status(500).json({
			message: 'Error creating the posts',
		});
	}
});

router.post('/', async (req, res) => {
	try {
		const newBlog = await Blogs.insert(req.body);
		res.status(200).json(newBlog);
	} catch (error) {
		res.status(500).json({
			message:
				'error: "There was an error while saving the post to the database',
		});
	}
});

router.post('/:id', async (req, res) => {
	try {
		const blog = await Blogs.remove(req.params.id);
		res.status(200).json(blog);
	} catch (error) {
		res.status(500).json({
			message:
				'error: "There was an error while deleting the post to the database',
		});
	}
});

router.put('/:id', async (req, res) => {
	try {
		const blog = await Blogs.update(req.params.id, req.body);
		res.status(200).json(blog);
	} catch (error) {
		res.status(500).json({
			message:
				'error: "There was an error while deleting the post to the database',
		});
	}
});
module.exports = router;
