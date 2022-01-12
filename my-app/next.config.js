module.exports = {
    webpack: (config, {isServer, webpack}) => {
        config.experiments = {...config.experiments, asyncWebAssembly: true};
        return config;
    },
};

