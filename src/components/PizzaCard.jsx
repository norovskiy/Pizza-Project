import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  Rating,
  IconButton,
  Stack
} from "@mui/material";
import { 
  Favorite, 
  AddShoppingCart, 
  LocalFireDepartment,
  Share,
  ExpandMore
} from "@mui/icons-material";
import { motion } from "framer-motion";

export default function PizzaCard({ pizza }) {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState("30см");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card
        sx={{
          width: 280, // Более компактная ширина
          height: 420, // Компактная высота
          background: 'linear-gradient(145deg, #1a1a1a 0%, #252525 100%)',
          color: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(255,102,0,0.1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 32px rgba(255,102,0,0.25)',
            borderColor: 'rgba(255,102,0,0.3)',
          }
        }}
      >
        {/* Верхняя часть с изображением */}
        <Box sx={{ position: 'relative', height: 150, overflow: 'hidden' }}>
          <CardMedia
            component="img"
            image={pizza.image}
            alt={pizza.name}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
              '&:hover': {
                transform: 'scale(1.08)'
              }
            }}
          />
          
          {/* Оверлей градиент */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '100%',
              background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8) 100%)'
            }}
          />
          
          {/* Бейдж популярности */}
          {pizza.isPopular && (
            <Chip
              icon={<LocalFireDepartment sx={{ fontSize: 14 }} />}
              label="🔥 Popular"
              size="small"
              sx={{
                position: 'absolute',
                top: 12,
                left: 12,
                background: 'linear-gradient(45deg, #FF512F, #F09819)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.7rem',
                height: 24,
                boxShadow: '0 2px 8px rgba(255,102,0,0.4)'
              }}
            />
          )}
          
          {/* Кнопки действий */}
          <Stack direction="row" spacing={1} sx={{ position: 'absolute', top: 10, right: 10 }}>
            <IconButton
              size="small"
              onClick={() => setIsLiked(!isLiked)}
              sx={{
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                color: isLiked ? '#FF3366' : 'rgba(255,255,255,0.7)',
                '&:hover': {
                  backgroundColor: 'rgba(255,51,102,0.2)'
                }
              }}
            >
              <Favorite sx={{ fontSize: 18 }} />
            </IconButton>
            
            <IconButton
              size="small"
              sx={{
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                color: 'rgba(255,255,255,0.7)',
                '&:hover': {
                  backgroundColor: 'rgba(255,102,0,0.2)'
                }
              }}
            >
              <Share sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
          
          {/* Рейтинг поверх изображения */}
          <Box sx={{ position: 'absolute', bottom: 10, left: 12 }}>
            <Rating
              value={pizza.rating || 4.5}
              precision={0.5}
              readOnly
              size="small"
              sx={{
                '& .MuiRating-icon': {
                  color: '#FFD700',
                  fontSize: 16
                }
              }}
            />
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', ml: 0.5, fontSize: 11 }}>
              {pizza.rating || 4.5} ({pizza.reviews || 24})
            </Typography>
          </Box>
        </Box>

        {/* Контент карточки */}
        <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Название */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #FF6600, #FF8C00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            {pizza.name}
          </Typography>

          {/* Описание */}
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              mb: 2,
              fontSize: '0.8rem',
              lineHeight: 1.4,
              flexGrow: 1,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {pizza.description}
          </Typography>

          {/* Размеры пиццы */}
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            {['25см', '30см', '35см'].map((size) => (
              <Chip
                key={size}
                label={size}
                size="small"
                variant={selectedSize === size ? "filled" : "outlined"}
                onClick={() => setSelectedSize(size)}
                sx={{
                  fontSize: '0.7rem',
                  height: 24,
                  borderColor: selectedSize === size ? '#FF6600' : 'rgba(255,102,0,0.4)',
                  backgroundColor: selectedSize === size ? '#FF6600' : 'transparent',
                  color: selectedSize === size ? 'white' : '#FF6600',
                  '&:hover': {
                    backgroundColor: 'rgba(255,102,0,0.1)'
                  }
                }}
              />
            ))}
          </Stack>

          {/* Цена и кнопка */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
            <Box>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block' }}>
                Starting from
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #FF6600, #FF8C00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '1.4rem'
                }}
              >
                {pizza.price}
              </Typography>
            </Box>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                startIcon={<AddShoppingCart sx={{ fontSize: 18 }} />}
                sx={{
                  background: 'linear-gradient(45deg, #FF6600, #FF8C00)',
                  color: 'white',
                  borderRadius: '12px',
                  px: 2,
                  py: 0.8,
                  minWidth: 'auto',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(255,102,0,0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF512F, #F09819)',
                    boxShadow: '0 6px 16px rgba(255,102,0,0.4)'
                  }
                }}
              >
                Add
              </Button>
            </motion.div>
          </Box>
        </CardContent>

        {/* Акцентная полоска снизу */}
        <Box
          sx={{
            height: 4,
            background: 'linear-gradient(90deg, #FF6600, #FF8C00, #FF6600)',
            backgroundSize: '200% 100%',
            animation: 'gradientShift 2s ease infinite'
          }}
        />
      </Card>
      
      {/* CSS анимация для градиента */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
}