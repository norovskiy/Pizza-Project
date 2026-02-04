import React, { useEffect, useState } from "react";
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Container,
  Grid,
  Chip,
  IconButton,
  Stack,
  Divider,
  alpha
} from "@mui/material";
import { 
  Coffee, 
  Instagram, 
  Twitter, 
  Linkedin,
  Star,
  Award,
  Users,
  Heart
} from "lucide-react";

export default function AboutUs() {
  const [team, setTeam] = useState([]);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Загружаем данные команды
    fetch("http://localhost:3001/team")
      .then(res => res.json())
      .then(data => setTeam(data))
      .catch(err => console.error(err));

    // Загружаем статистику
    fetch("http://localhost:3001/about")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-cafe-black">
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(rgba(26, 26, 26, 0.9), rgba(26, 26, 26, 0.9)), url('https://cdn.pixabay.com/photo/2022/03/29/03/40/food-7098703_1280.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              textAlign: 'center',
              mb: 2,
              background: 'linear-gradient(45deg, #f97316, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Команда мечты
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'white',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6
            }}
          >
            Знакомьтесь с профессионалами, которые каждый день создают магию в чашке
          </Typography>
        </Container>
      </Box>

      {/* Statistics */}
      {stats && (
        <Container maxWidth="xl" sx={{ py: 8 }}>
          <Grid container spacing={4} justifyContent="center" >
            {[
              { icon: Users, value: stats.teamCount || '20+', label: 'Специалистов' },
              { icon: Award, value: stats.experience || '5 лет', label: 'Опыта' },
              { icon: Coffee, value: stats.coffeeServed || '100K+', label: 'Чашек в год' },
              { icon: Heart, value: stats.satisfaction || '98%', label: 'Довольных гостей' },
            ].map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: alpha('#fb923c', 0.1),
                    border: '1px solid',
                    borderColor: alpha('#fb923c', 0.3),
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: alpha('#fb923c', 0.15),
                      boxShadow: '0 20px 40px rgba(249, 115, 22, 0.2)'
                    }
                  }}
                >
                  <stat.icon 
                    size={40} 
                    className="mx-auto mb-4"
                    style={{ color: '#fb923c' }}
                  />
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 800,
                      color: '#fb923c',
                      mb: 1
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: 1
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}

      

      {/* Philosophy Section */}
      <Box sx={{ 
        py: 12,
        background: `linear-gradient(135deg, ${alpha('#1a1a1a', 0.9)} 0%, ${alpha('#262626', 0.9)} 100%)`,
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: alpha('#fb923c', 0.1)
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
           <div className="flex justify-between items-center ">
                <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80"
                  alt="Team Philosophy"
                  style={{
                    width: '100%',
                    borderRadius: '24px',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                  }}
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: -30,
                    right: -24,
                    backgroundColor: '#fb923c',
                    color: '#1a1a1a',
                    padding: 3,
                    borderRadius: 3,
                    boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)',
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>
                    #OneTeam
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
             <div className="w-[70%] ml-[100px]"> <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 800,
                  mb: 4,
                  color: 'white'
                }}
              >
                Наша философия
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'white',
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8
                }}
              >
                Мы верим, что отличный кофе начинается с отличной команды. 
                Каждый член нашей команды — это не просто сотрудник, а творец, 
                который вкладывает душу в свою работу.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Star size={20} style={{ color: '#fb923c' }} />
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Ежедневное обучение и развитие
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Star size={20} style={{ color: '#fb923c' }} />
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Внимание к каждой детали
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Star size={20} style={{ color: '#fb923c' }} />
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Страсть к кофейному искусству
                </Typography>
              </Box></div>
            </Grid>
           </div>
          </Grid>
        </Container>
      </Box>

      {/* Join Us CTA */}
      <Container maxWidth="xl" sx={{ py: 12, textAlign: 'center' }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 800,
            mb: 3,
            color: 'white'
          }}
        >
          Хочешь стать частью команды?
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'white',
            maxWidth: '600px',
            mx: 'auto',
            mb: 6
          }}
        >
          Мы всегда рады талантливым и увлеченным людям. Присоединяйся к нашей кофейной семье!
        </Typography>
        <Box
          sx={{
            display: 'inline-block',
            padding: '16px 48px',
            background: 'linear-gradient(45deg, #f97316, #fb923c)',
            color: '#1a1a1a',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)'
            }
          }}
        >
          Отправить резюме
        </Box>
      </Container>
    </div>
  );
}